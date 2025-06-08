import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(({ constants }) => ({
  sectionWrapper: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  titleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'flex-start',
  },
  title: {
    marginBottom: constants.spacing.md,
  },
}));
