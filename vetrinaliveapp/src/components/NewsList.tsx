import { Grid } from '@mui/material'
import { NewsContextProvider } from '../contaxt/contextNews';
import NewsCard from './NewsCard'
import { useFetch } from "../customHook/useFetch";
import VisitorsWithOrdersContainer from './VisitorsWithOrdersContainer';
import FeedOutlinedIcon from "@mui/icons-material/FeedOutlined";

const url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=2de44063ba27446f9141b59657eaf7fd";

export const NewsList = () => {
   const state = useFetch(url);
  return (
    <VisitorsWithOrdersContainer
      cardLable="All News"
      hasDate={false}
      Icon={<FeedOutlinedIcon sx={{ color: "#103B66", width: "1.5rem" }} />}
      hasReadMoreArrow={false}
      hasTopRightUrl={true}
    >
      <NewsContextProvider value={state}>
        <Grid container columns={16} spacing={2} role="contentinfo">
          <NewsCard />
        </Grid>
      </NewsContextProvider>
    </VisitorsWithOrdersContainer>
  );
}

