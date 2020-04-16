import { debounce } from 'debounce';
import {
  Button,
  Container,
  Fab,
  Header,
  Icon,
  Input,
  Item,
  Text,
} from 'native-base';
import React, { useEffect, useCallback } from 'react';
import { Alert, FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import useDidUpdateEffect from '../../hooks/useDidUpdateEffect';
import SearchInput from '../../components/SearchInput';

const debouncedRefresh = debounce(refresh => refresh(), 200);

function CommonListScreen({
  navigation,
  entityName,
  detailScreenName,
  rowComponent,
  actions,
  selectors,
  selectId,
  selectName,
}) {
  const dispatch = useDispatch();
  const { isLoading, searchText } = useSelector(state => state[entityName]);
  const dataArray = useSelector(selectors.getDataArray);
  const hasMore = useSelector(selectors.getHasMore);

  const refresh = useCallback(() => dispatch(actions.getAll()), [actions]);

  const loadMore = () => {
    if (hasMore) {
      dispatch(actions.getMore());
    }
  };

  const goToDetail = entity => {
    navigation.navigate(detailScreenName, {
      id: selectId(entity),
      entity,
    });
  };

  const removeEntity = entity => dispatch(actions.remove(selectId(entity)));
  const confirmRemove = entity => {
    Alert.alert(
      'Confirm',
      `Are you sure want to remove ${selectName(entity)}?`,
      [
        { text: 'Cancel' },
        { text: 'Yes', onPress: () => removeEntity(entity) },
      ],
      { cancelable: true },
    );
  };

  useEffect(() => {
    refresh();
  }, [refresh]);

  useDidUpdateEffect(() => {
    debouncedRefresh(refresh);
  }, [refresh, searchText]);

  const ListRow = rowComponent;

  return (
    <Container>
      <Header searchBar rounded>
        <SearchInput
          value={searchText}
          onChangeText={text => dispatch(actions.setSearchText(text))}
        />
      </Header>
      <FlatList
        data={dataArray}
        keyExtractor={entity => selectId(entity).toString()}
        renderItem={({ item: entity }) => (
          <ListRow
            onRowPress={() => goToDetail(entity)}
            onRemovePress={() => confirmRemove(entity)}
            entity={entity}
          />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={() =>
          isLoading ? null : <Text>No {entityName} found</Text>
        }
      />
      <Fab position="bottomRight" onPress={() => goToDetail()}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
}

export default CommonListScreen;
