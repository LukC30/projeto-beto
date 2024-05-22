import { PDFViewer } from "@react-pdf/renderer";
import Input from "../../components/form/input/input";
import Navbar from "../../components/navbar/navbar";
import styles from './cadastro.module.css';
import { useState } from "react";
import PDF from "../../components/pdf/pdf";
import { Row, Col, Button, Form, FormGroup } from "react-bootstrap";


export default function GerarPdf() {
    const [produtos, setProdutos] = useState([]);


    const [unitProduto, setUnitProduto] = useState({
        qtd: 0,
        descricao: '',
        valorUnit: '',
        valorTotal: ''
    })
    const [dados, setDados] = useState({
        cliente: "",
        gestor: "",
        data: "",
        veiculo: "",
        km: "",
        placa: "",
        tel: "",
        servico: ""
    });
    


    return (
        <div>
            <Navbar />
            <section className={styles.form}>
                <form className={styles.section}>
                    <Input
                        placeholder={'Digite o nome do cliente'}
                        id={'cliente'}
                        value={dados.cliente}
                        handleOnChange={(event) => { setDados({ ...dados, cliente: event.target.value }) }}
                    />
                    <Input
                        placeholder={"Digite o nome do Gestor"}
                        id={"gestor"}
                        value={dados.gestor}
                        handleOnChange={(event) => { setDados({ ...dados, gestor: event.target.value.toString() }) }}
                    />
                    <Row>
                        <Col>
                            <Input
                                style={{ textAlign: 'center', verticalAlign: 'middle', margin: [0, '1%'] }}
                                type={'date'}
                                id={"Data"}
                                value={dados.data}
                                handleOnChange={(event) => { setDados({ ...dados, data: event.target.value }) }}
                            />
                        </Col>
                        <Col>
                            <Input
                                placeholder={"Digite o modelo do veiculo"}
                                id={"Veiculo"}
                                value={dados.veiculo}
                                handleOnChange={(event) => { setDados({ ...dados, veiculo: event.target.value }) }}
                            />
                        </Col>
                    </Row>



                    <Row>
                        <Col>
                            <Input
                                placeholder={"Digite a rodagem em Km do veiculo"}
                                id={"km"}
                                type={'text'}
                                value={dados.km}
                                handleOnChange={(event) => { setDados({ ...dados, km: event.target.value }) }}
                            />
                        </Col>
                        <Col>
                            <Input
                                placeholder={"Digite a placa do veiculo"}
                                id={"placa"}
                                value={dados.placa}
                                handleOnChange={(event) => { setDados({ ...dados, placa: event.target.value }) }}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Input
                                placeholder={"Digite o telefone do cliente"}
                                id={"telefone"}
                                value={dados.tel}
                                handleOnChange={(event) => { setDados({ ...dados, tel: event.target.value }) }}
                            />
                        </Col>
                        <Col>
                            <Input
                                placeholder={"Digite o tipo de serviço"}
                                id={"servico"}
                                value={dados.servico}
                                handleOnChange={(event) => { setDados({ ...dados, servico: event.target.value }) }}
                            />
                        </Col>

                    </Row>


                    <Row>
                        <p style={{ textAlign: 'center' }}>Cadastro de produtos</p>
                        <Col>
                            <Input
                                placeholder={'Digite a quantidade'}
                                type={'number'}
                                id={'quantidade'}
                                value={unitProduto.qtd}
                                handleOnChange={(event)=>{setUnitProduto({...unitProduto, qtd: event.target.value})}}
                            />

                        </Col>
                        <Col>
                        <Input
                                placeholder={'Digite a Descrição'}
                                type={'text'}
                                id={'Descricao'}
                                value={unitProduto.descricao}
                                handleOnChange={(event)=>{setUnitProduto({...unitProduto, descricao: event.target.value})}}
                            />
                        </Col>

                    </Row>
                    <Row>
                        <Col>
                            <Input
                            />

                        </Col>
                        <Col>
                            <Input
                            />
                        </Col>

                    </Row>
                    <Button type="submit" style={{ justifyContent: "right" }}>Adicionar</Button>
                </form>
            </section>
            <div>
                {/* <PDFViewer width="100%" height={'600px'}>
                    <PDF
                        dados={dados}
                    />
                </PDFViewer> */}
            </div>

        </div>
    )
}
