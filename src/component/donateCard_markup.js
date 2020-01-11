//TODO: change to CSS file

export const style_layout = {
  position: 'relative',
  backgroundColor: 'white',
  width: 450,
  height: 310,
  borderRadius: 8,
  boxShadow: '0 0 16px gray',
};

export const style_image = {
  maxWidth: '100%',
  height: 'auto',
  width: 'auto',
};

export const style_description = {
  display: 'flex',
  flexDirection: 'row',
  padding: 16,
  justifyContent: 'space-between',
  alignItems: 'center',
};

export const style_description__text = {
  fontWeight: 600,
  color: 'gray',
  fontSize: 16,
};

export const style_description__button = {
  border: '2px solid blue',
  color: 'blue',
  fontSize: 14,
  backgroundColor: 'white',
  paddingLeft: 8,
  paddingRight: 8,
  paddingTop: 4,
  paddingBottom: 4,
  fontWeight: 600,
  borderRadius: 4,
  cursor: 'pointer',
};

export const style_payment_layout = {
  position: 'absolute',
  backgroundColor: 'rgba(255, 255, 255, 0.95)',
  width: 450,
  height: 310,
  padding: 16,
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
};

export const style_payment_layout__close_layout = {
  display: 'flex',
  flexDirection: 'row-reverse',
};

export const style_payment_layout__close_button = {
  fontSize: 16,
  color: 'black',
  cursor: 'pointer',
};