import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Hero from '../../components/hero/Hero';
import './home.scss';
import Category from '../../components/category/Category.tsx';
import { Box } from '@mui/material';


export default function Home() {
  return (
    <>
      <Hero />
      <Category />
      <Box className="home">
        <Posts />
        <Sidebar />
      </Box>
     
    </>
  );
}
