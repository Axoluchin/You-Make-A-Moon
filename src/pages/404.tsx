import Link from "next/link";
import { Container, Text } from "@nextui-org/react";

const Error404 = () => (
    <Container xl
    style={{
        height: '70vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }}
    >
        <Text h2>
            Pagina no encontrada
        </Text>
        <Link href="/">
            Volver al inicio
        </Link>
    </Container>
)

export default Error404
