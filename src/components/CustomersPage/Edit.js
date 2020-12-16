import React from "react";
import { useFormik } from "formik";
import { useRef } from "react";
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
import { EditIcon } from "@chakra-ui/icons";
import { CustomersService } from "../../services";
export default function EditComponent(props) {
  const gData = props.vl;
  const { colorMode } = useColorMode();
  const boxColor = { light: "teal.300", dark: "teal.600" };
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const formik = useFormik({
    initialValues: {
      CusID: gData.CusID,
      FName: gData.FName,
      LName: gData.LName,
      Phone: gData.Phone,
      Mail: gData.Mail,
    },

    onSubmit: async (values, { resetForm }) => {
      await CustomersService.UpdateACustomers(gData.ID, values);
      resetForm({
        values: { CusID: "", FName: "", LName: "", Phone: "", Mail: "" },
      });
      onClose();
    },
  });
  return (
    <>
      <IconButton
        rounded="full"
        onClick={onOpen}
        icon={<EditIcon />}
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
            <DrawerCloseButton />
            <DrawerHeader>Edit The Customer</DrawerHeader>
            <DrawerBody>
              <Stack spacing={1}>
                <Input
                  id="CusID"
                  placeholder="CusID"
                  value={formik.values.CusID}
                  onChange={formik.handleChange}
                />
                <Input
                  id="FName"
                  placeholder="FName"
                  value={formik.values.FName}
                  onChange={formik.handleChange}
                />
                <Input
                  id="LName"
                  placeholder="LName"
                  value={formik.values.LName}
                  onChange={formik.handleChange}
                />
                <Input
                  id="Phone"
                  placeholder="Phone"
                  value={formik.values.Phone}
                  onChange={formik.handleChange}
                />
                <Input
                  id="Mail"
                  placeholder="Mail"
                  value={formik.values.Mail}
                  onChange={formik.handleChange}
                />
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button color="blue" onClick={formik.handleSubmit}>
                Update
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
}
