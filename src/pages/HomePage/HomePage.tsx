import axios from "axios";
import {Box, Flex} from "@chakra-ui/react";
import {useQuery} from "react-query";
import loadingGif from "../../assets/img/Cube-1s-200px.gif";
import {environment} from "../../configs/environment";
import TableComponent from "../../components/HomePage/Table";
import AddComponent from "../../components/HomePage/Add";

export default function HomePage() {
    const {isLoading, error, data} = useQuery("restaurants", () =>
        axios.get(environment.baseURL + "/restaurants/").then((res) => res.data)
    );

    let table;

    if (error) {
        console.log(error);
    }

    if (!data) {
        if (isLoading) {
            table = <img src={loadingGif} alt="Loading"/>;
        }
    } else {
        table = Object.entries(data).map(([key, value]) => (
            <TableComponent key={key} vl={value}/>
        ));
    }

    return (
        <Flex justify="center" align="center" p={4}>
            <Box p={1} color="white">
                <AddComponent/>
                {table}
            </Box>
        </Flex>
    );
}
