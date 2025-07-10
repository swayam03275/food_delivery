import { createSlice } from "@reduxjs/toolkit";
import burger from "../../assets/burger.jpg";
import pizza from "../../assets/pizza.jpg";
import fries from "../../assets/fries.jpg";
import hotdog from "../../assets/hotdog.jpg";
import cake from "../../assets/cake.jpg";
import momos from "../../assets/momos.jpg";
import noodles from "../../assets/noodles.jpg";
import panipuri from "../../assets/panipuri.jpg";
import pasta from "../../assets/pasta.jpg";
import salad from "../../assets/salad.jpg";
import samosa from "../../assets/samosa.jpg";
import vegthali from "../../assets/vegthali.jpg";





const initialState={
    items:[
        {id:1,name:"Burger",price:"90",image:burger},
        {id:2,name:"Pizza",price:"140",image:pizza},
        {id:3,name:"Fries",price:"60",image:fries},
        {id:4,name:"HotDog",price:"80",image:hotdog},
        {id:5,name:"Cake",price:"200",image:cake},
        {id:6,name:"Momos",price:"70",image:momos},
        {id:7,name:"Noodels",price:"60",image:noodles},
        {id:8,name:"PaniPuri",price:"50",image:panipuri},
        {id:9,name:"Pasta",price:"120",image:pasta},
        {id:10,name:"Salad",price:"100",image:salad},
        {id:11,name:"Samosa",price:"40",image:samosa},
        {id:12,name:"VegThali",price:"180",image:vegthali}

    ]
}
const productSlice=createSlice({
    name:'products',
    initialState,
    reducers:{

    }

})
export default productSlice.reducer