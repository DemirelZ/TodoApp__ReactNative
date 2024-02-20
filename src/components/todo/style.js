import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  todosWrapper: {
    marginVertical: 10,
  },
  todoWrapper: {
    borderWidth: 1,

    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 20,
    padding: 10,
    flexDirection: 'row',
  },
  greenBorder: {
    borderColor: 'green',
  },
  blackBorder: {
    borderColor: 'black',
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  yokText: {
    textAlign: 'center',
  },
  iconsWrapper: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
  },
  textsWrapper: {
    flex: 7,
  },
  editTitle: {
    flex: 7,
    fontSize: 22,
    fontWeight: 'bold',

    margin: 5,
    padding: 5,
  },
  editableWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 5,
    borderWidth:1
  },
  editIcons: {
    flexDirection:'row',
    padding:3,
    gap:5,
    alignItems:'center',
    justifyContent:'center'
  },
});
