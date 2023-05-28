import { styled } from '@mui/system';
const Input = styled('input')({
  width: '180px',
  padding: '10px 13px 10px 13px',
  fontSize: '15px',
  borderRadius: '16px',
  fontFamily: 'Commissioner, sans-serif',
  border: '1px solid grey',
});

export default function CreateprojectInput(props) {
  return <Input {...props} />;
}
