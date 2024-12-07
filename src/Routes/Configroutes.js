import Layout from "../Layout";

const { default: Home } = require("../Pages/Home");
const { default: Login } = require("../Pages/Login");
const { default: Signup } = require("../Pages/Signup");

const ConfigRoute =[
    {
        element:<Layout/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/signup',
                element:<Signup/>
            }
        ]
    }
   
]
// module.exports={ConfigRoute}
export default ConfigRoute