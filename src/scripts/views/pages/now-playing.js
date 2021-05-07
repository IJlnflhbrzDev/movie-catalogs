const nowPlaying = {
  // RENDER INI ADALAH SEBUAH METHOD BUATAN SENDIRI BUKAN BAWAAN OBJECT atau javascript
  async render() {
    return `
               <h2>Now Playing Page</h2>
          `;
  },

  async afterRender() {
    // FUNGSI INI AKAN DI PANGIL SETELAH FUNCTION RENDER DI PANGIL
  },
};

export default nowPlaying;
