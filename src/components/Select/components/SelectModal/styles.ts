import { createStyleSheet } from '@/helpers';

export const getStyles = createStyleSheet(({ constants, colors }) => ({
  safeAreaView: {
    flex: 1,
  },
  header: {
    display: 'flex',
    position: 'relative',
    flexDirection: 'row',
    borderBottomWidth: constants.borderWidth.sm,
    borderTopWidth: constants.borderWidth.md,
    borderTopColor: colors.backgroundSecondaryGray,
    borderBottomColor: colors.backgroundSecondaryGray,
    paddingVertical: constants.spacing.md,
    paddingHorizontal: constants.spacing.md,
    alignItems: 'center',
    width: '100%',
  },
  headerCloseButton: {
    position: 'absolute',
    left: constants.spacing.md,
  },
  titleContainer: {
    marginHorizontal: 'auto',
  },
  upperBackdrop: {
    height: '10%',
    backgroundColor: colors.background,
    opacity: constants.opacity.lg,
  },
  contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    backgroundColor: colors.background,
  },
  listContainer: {
    flexGrow: 1,
    marginBottom: constants.spacing.md,
  },
}));
