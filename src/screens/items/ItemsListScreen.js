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
import React, { useEffect } from 'react';
import { FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { getItems, getMoreItems, setItemSearch } from '../../actions/items';
import ItemListItem from './components/ItemListItem';

const debouncedRefresh = debounce(dispatch => dispatch(getItems()), 200);

function ItemsListScreen({ navigation }) {
  const dispatch = useDispatch();
  const { data, isLoading, totalCount, searchText } = useSelector(
    state => state.items,
  );

  const refresh = () => dispatch(getItems());
  const loadMore = () => {
    if (totalCount > data.length) {
      dispatch(getMoreItems());
    }
  };
  const goToDetail = item => navigation.navigate('Item Detail', { item });

  useEffect(() => {
    debouncedRefresh(dispatch);
  }, [dispatch, searchText]);

  return (
    <Container>
      <Header searchBar rounded>
        <Button transparent>
          <Text>Search</Text>
        </Button>
        <Item>
          <Input
            value={searchText}
            placeholder="Search"
            onChangeText={text => dispatch(setItemSearch(text))}
          />
          <Icon name="search" />
        </Item>
      </Header>
      <FlatList
        data={data}
        keyExtractor={item => item.id.toString()}
        renderItem={({ item }) => (
          <ItemListItem navigation={navigation} item={item} />
        )}
        refreshControl={
          <RefreshControl refreshing={isLoading} onRefresh={refresh} />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.5}
        ListEmptyComponent={() => (isLoading ? null : <Text>No items</Text>)}
      />
      <Fab position="bottomRight" onPress={() => goToDetail()}>
        <Icon name="add" />
      </Fab>
    </Container>
  );
}

export default ItemsListScreen;
