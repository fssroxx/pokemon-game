import Header from '../Header';
import Layout from '../Layout';
import Footer from '../Footer';
import bg1 from '../../assets/bg1.jpg';
import bg2 from '../../assets/bg2.jpg';

const App = () => {
  return(
    <>
      <Header title='main' descr='main page'/>
      <Layout id={1} title={'first'} descr={'smth'} urlBg={bg1}/>
      <Layout id={2} title={'second'} descr={'smth else'} colorBg={'red'}/>
      <Layout id={3} title={'third'} descr={'smth else again'} urlBg={bg2}/>
      <Footer />
    </>
  )
}
export default App;
