# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

C   urrently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


export const carddetaildsLoader=async({params})=>{
  const {id}=params
  const response=await fetch(' https://fakestoreapi.com/products/' + id)

  if(!response.ok){
    throw new error('job post not found')
  }
  const Jsonresponse=await response.json()
  return
      Jsonresponse
}


export default Carddetails
 
