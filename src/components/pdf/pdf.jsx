import React from "react";
import { View, Text, Page, Document, Image, StyleSheet } from "@react-pdf/renderer";

export default function PDF({ dados, orcamento }) {
    const styles = StyleSheet.create({
        body: {
            paddingTop: 20,
            paddingBottom: 100,
            paddingHorizontal: 35,
        },
        title: {
            fontSize: 20,
            marginBottom: 10,
            textAlign: 'center',
            fontWeight: 'bold',
        },
        text: {
            marginVertical: 5,
            fontSize: 12,
            lineHeight: 1.5,
            textAlign: 'left',
            fontFamily: 'Arial',
        },
        footer: {
            position: 'absolute',
            fontSize: 10,
            bottom: 30,
            left: 35,
            right: 35,
            textAlign: 'center',
            color: 'grey',
        },
        image: {
            width: 200,
            height: 100,
            marginBottom: 20,
            alignSelf: 'center',
        },
        header: {
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 20,
        },
        headerText: {
            fontSize: 14,
            fontWeight: 'bold',
        },
        infoContainer: {
            marginBottom: 20,
        },
        infoText: {
            fontSize: 12,
            marginBottom: 5,
        },
        serviceContainer: {
            marginBottom: 20,
        },
        serviceText: {
            fontSize: 12,
        },
        table: {
            display: "table",
            width: "auto",
            borderStyle: "solid",
            borderWidth: 1,
            borderRightWidth: 0,
            borderBottomWidth: 0,
            borderCollapse: "collapse",
        },
        row: {
            flexDirection: "row",
        },
        headerRow: {
            flexDirection: "row",
            backgroundColor: "#f2f2f2",
        },
        cell: {
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            width: 100,
            fontSize: 8, 
            padding: 4, 
        },
        headerCell: {
            borderWidth: 1,
            borderLeftWidth: 0,
            borderTopWidth: 0,
            width: 180, 
            fontWeight: "bold",
            fontSize: 12, 
            padding: 4, 
        },
    });

    return (
        <Document>
            <Page style={styles.body}>
                <View>
                    <Image
                        style={styles.image}
                        src="caminho/para/sua/imagem.png"
                    />
                    <View style={styles.header}>
                        <Text style={styles.headerText}>Cliente: {dados.cliente}</Text>
                        <Text style={styles.headerText}>Gestor: {dados.gestor}</Text>
                    </View>
                    <View style={styles.infoContainer}>
                        <Text style={styles.infoText}>Data: {dados.data}</Text>
                        <Text style={styles.infoText}>Veículo/Km: {dados.veiculo} / {dados.km}Km</Text>
                        <Text style={styles.infoText}>Placa: {dados.placa}</Text>
                        <Text style={styles.infoText}>Telefone: {dados.tel}</Text>
                    </View>
                    <View style={styles.serviceContainer}>
                        <Text style={styles.serviceText}>{dados.servico}</Text>
                    </View>
                    <View style={styles.table}>
                        <View style={styles.headerRow}>

                            <View style={[styles.headerCell, { width: 80 }]}>
                                <Text>Qtd.</Text>
                            </View>
                            <View style={[styles.headerCell, { width: 300 }]}>
                                <Text>Descrição</Text>
                            </View>
                            <View style={[styles.headerCell, { width: 80 }]}>
                                <Text>V. Unit</Text>
                            </View>
                            <View style={[styles.headerCell, { width: 80 }]}>
                                <Text>V. Total</Text>
                            </View>
                        </View>
                        {
                            orcamento && orcamento.map((item, index) => (
                                <View style={styles.row} id={index}>
                                    <View style={[styles.cell, { width: 87 }]}>
                                        <Text>{item.qtd}</Text>
                                    </View>
                                    <View style={[styles.cell, { width: 325 }]}>
                                        <Text>{item.descricao}</Text>
                                    </View>
                                    <View style={[styles.cell, { width: 87 }]}>
                                        <Text>{item.valorUnit}</Text>
                                    </View>
                                    <View style={[styles.cell, { width: 87 }]}>
                                        <Text>{item.valorTotal}</Text>
                                    </View>
                                </View>))
                        }
                    </View>
                </View>
                <Text style={[styles.footer, { bottom: 60 }]} fixed>Razão Social: REPARAÇÃO E MECÂNICA SANTOS LTDA.</Text>
                <Text style={[styles.footer, { bottom: 45 }]} fixed>CNPJ: 54.123.485/0001-30</Text>
                <Text style={[styles.footer, { bottom: 30 }]} fixed>Rod. Regis Bittencourt, Km 285 Bloco L2, Itapecirica da Serra, Jd. Itapecirica, 06888-700</Text>
            </Page>
        </Document>
    );
}
