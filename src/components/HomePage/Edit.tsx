import React, {useRef} from "react";
import * as Yup from 'yup';
import {useFormik} from "formik";
import {useQueryCache} from "react-query";
import {
    Button,
    IconButton,
    useColorMode,
    useDisclosure,
    Input,
    Stack,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
} from "@chakra-ui/react";
import {EditIcon} from "@chakra-ui/icons";
import {RestaurantsService} from "../../services";

export default function EditComponent(props: { vl: any }) {
    const gData = props.vl;
    const queryClient = useQueryCache();
    const {colorMode} = useColorMode();
    const boxColor = {light: "teal.300", dark: "teal.600"};
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef: any = useRef();
    const restaurantSchema = Yup.object().shape({
        ResID: Yup.number().positive().integer().required('Required'),
        Name: Yup.string().required('Required'),
        Phone: Yup.number().required('Required'),
        Location: Yup.number().required('Required'),
        ImgURl: Yup.string().url().required('Required')
    });
    const formik = useFormik({
        initialValues: {
            ResID: gData.ResID,
            Name: gData.Name,
            Phone: gData.Phone,
            Location: gData.Location,
            ImgURL: gData.ImgURL,
        },
        validationSchema: restaurantSchema,
        onSubmit: async (values, {resetForm}) => {
            await RestaurantsService.UpdateARestaurant(gData.ID, values);
            resetForm({
                values: {ResID: "", Name: "", Phone: "", Location: "", ImgURL: ""},
            });
            await queryClient.invalidateQueries('restaurants');
            onClose();
        },
    });
    return (
        <>
            <IconButton
                aria-label=""
                rounded="full"
                onClick={onOpen}
                icon={<EditIcon/>}
                bg={boxColor[colorMode]}
            />
            <Drawer
                isOpen={isOpen}
                placement="right"
                onClose={onClose}
                finalFocusRef={btnRef}
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton/>
                        <DrawerHeader>Edit The Restaurant</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={1}>
                                <Input
                                    id="ResID"
                                    placeholder="ResID"
                                    value={formik.values.ResID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="Name"
                                    placeholder="Name"
                                    value={formik.values.Name}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="Phone"
                                    placeholder="Phone"
                                    value={formik.values.Phone}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="Location"
                                    placeholder="Location"
                                    value={formik.values.Location}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="ImgURL"
                                    placeholder="ImgURL"
                                    value={formik.values.ImgURL}
                                    onChange={formik.handleChange}
                                />
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue" onClick={() => formik.handleSubmit()}>
                                Update
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}
