import { Box, Grid, useColorMode, IconButton } from "@chakra-ui/react";
import { DeleteIcon } from "@chakra-ui/icons";
import EditComponent from "./Edit";
import { FoodItemsService } from "../../services";
export default function TableComponent(props: { vl: any }) {
  const value = props.vl;
  const { colorMode } = useColorMode();
  const bgColor = { light: "gray.200", dark: "gray.500" };
  const boxColor = { light: "teal.300", dark: "teal.600" };
  const textColor = { light: "black", dark: "gray.100" };
  const onDelete = () => {
    FoodItemsService.DeleteAFoodItem(value.ID);
  };
  return (
    <Box
      borderWidth="1px"
      borderRadius="lg"
      margin={1}
      w="100%"
      p={1}
      bg={bgColor[colorMode]}
      color={textColor[colorMode]}
    >
      <Grid templateColumns="repeat(6, 1fr)" gap={6}>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.ItmID}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.ResID}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.Name}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.ItmKind}
        </Box>
        {/* <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.smallPrice}
        </Box>
        <Box borderRadius="lg" p="1" bg={boxColor[colorMode]}>
          {value.largePrice}
        </Box> */}
        <Box align="center">
          <EditComponent vl={value} />
        </Box>
        <Box align="center">
          <IconButton
            aria-label=""
            rounded="full"
            onClick={onDelete}
            icon={<DeleteIcon />}
            bg={boxColor[colorMode]}
          />
        </Box>
      </Grid>
    </Box>
  );
}
