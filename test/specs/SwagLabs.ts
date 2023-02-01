import Log from "../pageobjects/home.js"
import cart from '../pageobjects/cart.js'
describe('My Login application', () => {
before("befor tests",async()=>{await Log.open()})
   
    it('should login with valid credentials', async () => {
        
        await Log.log("standard_user","secret_sauce")
        await cart.cart("mohamed","saliman","234671")
        await expect(cart.message).toExist()
      
        
    })
})


