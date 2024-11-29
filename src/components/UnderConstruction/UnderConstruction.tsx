import React from 'react';

const PageUnderConstruction: React.FC = () => {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return (
    <div style={styles.container}>
      <p style={styles.text}>🚧 Page under construction 🚧</p>
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    width: '100%',
    backgroundColor: '#F5DEB3', // Bege
    padding: '10px 0',
    position: 'fixed',
    top: 0,
    left: 0,
    textAlign: 'center',
    zIndex: 1000, // Para garantir que esteja acima de outros elementos
  },
  text: {
    margin: 0,
    fontSize: '18px',
    fontWeight: 'bold',
    color: '#000', // Preto para contraste
  },
};

export default PageUnderConstruction;
