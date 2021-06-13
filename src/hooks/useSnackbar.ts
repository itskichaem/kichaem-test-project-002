import { useSnackbar as useSnackbarNotistack, VariantType } from 'notistack';

function useSnackbar() {
  const { enqueueSnackbar } = useSnackbarNotistack();

  const enqueue = (variant: VariantType) => (msg: string) =>
    enqueueSnackbar(msg, {
      variant,
      anchorOrigin: {
        horizontal: 'center',
        vertical: 'top',
      },
      autoHideDuration: 2000,
    });

  return {
    enqueue: enqueue('default'),
    enqueueError: enqueue('error'),
    enqueueInfo: enqueue('info'),
    enqueueSuccess: enqueue('success'),
    enqueueWarning: enqueue('warning'),
  };
}

export default useSnackbar;
