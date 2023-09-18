module.exports = {
  post: jest.fn().mockReturnThis(),
  send: jest.fn().mockReturnThis(),
  set: jest.fn().mockReturnThis(),
  then: jest.fn().mockImplementation((callback) => {
    return new Promise((resolve, reject) => {                
      return resolve(callback("token"))
    })
  }),    
}