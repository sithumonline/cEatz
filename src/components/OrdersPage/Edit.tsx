import React from "react";
import {useFormik} from "formik";
import {useQueryCache} from "react-query";
import {useRef} from "react";
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
import {OrdersService} from "../../services";

export default function EditComponent(props: { vl: any }) {
    const gData = props.vl;
    const queryClient = useQueryCache()
    const {colorMode} = useColorMode();
    const boxColor = {light: "teal.300", dark: "teal.600"};
    const {isOpen, onOpen, onClose} = useDisclosure();
    const btnRef: any = useRef();
    const formik = useFormik({
        initialValues: {
            CusID: gData.CusID,
            OrdID: gData.OrdID,
            ResID: gData.ResID,
            NoItems: gData.NoItems,
            paymentWay: gData.paymentWay,
        },

        onSubmit: async (values, {resetForm}) => {
            await OrdersService.UpdateAOrder(gData.ID, values);
            resetForm({
                values: {
                    CusID: "",
                    OrdID: "",
                    ResID: "",
                    NoItems: "",
                    paymentWay: "",
                },
            });
            await queryClient.invalidateQueries('orders')
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
                        <DrawerHeader>Edit The Order</DrawerHeader>
                        <DrawerBody>
                            <Stack spacing={1}>
                                <Input
                                    id="CusID"
                                    placeholder="CusID"
                                    value={formik.values.CusID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="OrdID"
                                    placeholder="OrdID"
                                    value={formik.values.OrdID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="ResID"
                                    placeholder="ResID"
                                    value={formik.values.ResID}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="NoItems"
                                    placeholder="NoItems"
                                    value={formik.values.NoItems}
                                    onChange={formik.handleChange}
                                />
                                <Input
                                    id="paymentWay"
                                    placeholder="paymentWay"
                                    value={formik.values.paymentWay}
                                    onChange={formik.handleChange}
                                />
                            </Stack>
                        </DrawerBody>
                        <DrawerFooter>
                            <Button variant="outline" mr={3} onClick={onClose}>
                                Cancel
                            </Button>
                            <Button color="blue" onClick={() => formik.handleSubmit}>
                                Update
                            </Button>
                        </DrawerFooter>
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>
        </>
    );
}
