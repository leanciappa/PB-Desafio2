class  ProductManager{
    constructor(){
        this.products = []; 
    }

    getProducts(){ 
        console.log(products)
        return this.products; 
    } 

    addProducts(title, description, price, thumbnail, code, stock){
        let newId
        if(this.products.length ==0){
            newId=1
        }else {
            newId = this.products [this.products.length-1].id+1
        }
        const newProducts = {
            id: newId, 
            title, 
            description, 
            price, 
            thumbnail, 
            code, 
            stock}
        this.products.push(newProducts)
    }

    getProductById(idProducts){ 
        const products = this.products.find(elm => elm.id === idProducts);
        if (!products){
            console.log("Not found");
        } else{
            console.log (products)
            return products

        }
    }
}