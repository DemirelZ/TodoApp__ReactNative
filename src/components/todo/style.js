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
});
