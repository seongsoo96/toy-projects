import CircularProgress from '@mui/material/CircularProgress';

export default function Loading() {
  return (
    <div
      style={{ display: 'flex', justifyContent: 'center', marginTop: '200px' }}>
      <CircularProgress />
    </div>
  );
}
