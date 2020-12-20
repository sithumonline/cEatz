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
import {FoodItemsService} from "../../services";

export default function EditComponent(props: { vl: any }) {
    const gData = props.vl;
    const queryClient = useQueryCache();
    const {colorMode} = useColorMode();
    const boxColor = {light: "teal.300", dark: "teal.600"};
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef: any = useRef();
    const foodItemSchema = Yup.object().shape({
        ItmID: Yup.number().positive().integer().required('Required'),
        ResID: Yup.number().positive().integer().required('Required'),
        Name: Yup.string().required('Required'),
        ItmKind: Yup.string().required('Required'),
        smallPrice: Yup.number().required('Required'),
        largePrice: Yup.number().required('Required'),
        ImgURl: Yup.string().url().required('Required')
    });
    const formik = useFormik({
        initialValues: {
            ItmID: gData.ItmID,
            ResID: gData.ResID,
            Name: gData.Name,
            ItmKind: gData.ItmKind,
            smallPrice: gData.smallPrice,
            largePrice: gData.largePrice,
            ImgURL: gData.ImgURL,
        },
        validationSchema: foodItemSchema,
        onSubmit: async (values, {resetForm}) => {
            await FoodItemsService.UpdateAFoodItem(gData.ID, values);
            resetForm({
                values: {
                    ItmID: "",
                    ResID: "",
                    Name: "",
                    ItmKind: "",
                    smallPrice: "",
                    largePrice: "",
                    ImgURL: "",
                },
            });
            await queryClient.invalidateQueries('food-items');
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
                        <DrawerHeader>Edit The Food Item</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={1}>
                                <Input
                                    id="ItmID"
                                    placeholder="ItmID"
                                    value={formik.values.ItmID}
                                    onChange={formik.handleChange}
                                />
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
                                    id="ItmKind"
                                    placeholder="ItmKind"
                                    value={formik.values.ItmKind}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="smallPrice"
                                    placeholder="smallPrice"
                                    value={formik.values.smallPrice}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="largePrice"
                                    placeholder="largePrice"
                                    value={formik.values.largePrice}
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
