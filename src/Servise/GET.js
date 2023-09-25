class GET{
    static async getAllProducts(){
        try{
            const resp = await fetch('http://localhost:3001/allproducts')
            const data = await resp.json()
            return data
        }
        catch(error){
            console.error(error);
        }
    }
    static async getBasket(){
        try{
            const resp = await fetch('http://localhost:3001/basket')
            const data = await resp.json()
            return data
        }
        catch(error){
            console.error(error);
        }
    }
}
export default GET;