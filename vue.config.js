module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/calendar/' // calendar 為 repo 名稱
      : '/'
  }