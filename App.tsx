import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

interface Props {}

interface IFrases {
  textoFrase: string;
  img: any;
}

const frases: string[] = [
  'Tente não se tornar uma pessoa de sucesso, mas tente se tornar uma pessoa de valor.',
  'Nenhum mentiroso tem uma memória suficientemente boa para ser um mentiroso de êxito.',
  'Todo mundo é capaz de sentir os sofrimentos de um amigo. Ver com agrado os seus êxitos exige uma natureza muito delicada.',
  'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas acima de tudo, seja você sempre.',
  'Se você quiser fazer uma mudança permanente, pare de se concentrar no tamanho dos seus problemas e comece a focar no seu tamanho!',
  'A nossa maior glória não reside no fato de nunca cairmos, mas sim em levantarmo-nos sempre depois de cada queda.',
  'É melhor falhar na originalidade do que ter sucesso na imitação.',
  'Um verdadeiro empreendedor é alguém que não tem rede de segurança por baixo deles.'
];

class App extends Component<Props, IFrases> {
  constructor(props: Props) {
    super(props);
    
    this.state = {
      textoFrase: 'Um verdadeiro empreendedor é alguém que não tem rede de segurança por baixo deles.',
      img: require('./src/biscoito.png')
    };

    this.quebrarBiscoito = this.quebrarBiscoito.bind(this);
  }

  quebrarBiscoito() {
    const numeroAleatorio = Math.floor(Math.random() * frases.length);
    this.setState({
      textoFrase: `"${frases[numeroAleatorio]}"`,
      img: require('./src/biscoitoAberto.png')
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <Image
          source={this.state.img}
          style={styles.img}
        />
        <Text style={styles.textofrase}>{this.state.textoFrase}</Text>
        <TouchableOpacity style={styles.botao} onPress={this.quebrarBiscoito}>
          <View style={styles.btnArea}>
            <Text style={styles.btnTexto}>Abrir Biscoito da sorte</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  img: {
    width: 250,
    height: 250
  },
  textofrase: {
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao: {
    width: 250,
    height: 50,
    borderWidth: 2,
    borderColor: '#dd7b22',
    borderRadius: 25
  },
  btnArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22',
  }
});

export default App;
