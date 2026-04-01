import StyleClassProps from "@/StylesClassProps";
import { ReactNode } from "react";
import { Modal, ModalProps, View } from "react-native";
interface ModalRootProps extends ModalProps, StyleClassProps {
    children: ReactNode
}
export default function ModalRoot({ children, ...props }: ModalRootProps) {
    return (
        <Modal {...props}>
            <View className={`${props.boxStyles} h-full   m-4`}>
                <View className="min-h-[50%] border bg-white border-stone-400 rounded-2xl">
                    {children}
                </View>
            </View>
        </Modal>
    )
}