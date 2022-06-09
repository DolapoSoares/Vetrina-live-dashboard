import { Card, CardActionArea, CardActions, CardContent, Grid, Stack } from '@mui/material';
import { CgExtensionAdd } from 'react-icons/cg';
import ExtensionsMarketPlace from './ExtensionsMarketPlace';
import AdvertBoard from './AdvertBoard';
import VisitorsWithOrdersContainer from './VisitorsWithOrdersContainer';
// images
import AppStore from "../images/appStore.png";
import GooglePlay from "../images/googlePlay.png";


const MarketDemoPlace = () => {
  return (
    <Stack direction={{ xs: "column", md: "row" }} spacing={2}>
      <Grid item xs={16}>
        <Card
          sx={{ maxWidth: "100%", marginBottom: 2, backgroundColor: "#F3A35C" , borderRadius: "10px"}}
        >
          <CardActionArea>
            <CardContent>
              <AdvertBoard />
            </CardContent>
          </CardActionArea>
          <CardActions
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
            }}
          >
            <img src={AppStore} alt="appStore" />
            <img src={GooglePlay} alt="GooglePlay" />
          </CardActions>
        </Card>
      </Grid>
      <Grid item xs={16} data-testid="extensions-marketplace">
        <VisitorsWithOrdersContainer
          componentHeight="320px"
          cardLable="Extensions Marketplace"
          hasDate={false}
          Icon={<CgExtensionAdd size={25} color="#103B66" />}
          hasReadMoreArrow={true}
          readMoreLink="Discover all extensions"
        >
        <ExtensionsMarketPlace />
        </VisitorsWithOrdersContainer>
      </Grid>
    </Stack>
  );
}

export default MarketDemoPlace
