"use client";

import { useSelector, useDispatch } from "react-redux";
import { setAddressDetails } from "@/app/store/features/addresses";
import ShippingAddressPage from "../components/addresses/ShippingAddress";

export default function Address() {
 return <ShippingAddressPage/>
}
