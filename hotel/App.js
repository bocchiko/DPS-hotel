import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  SafeAreaView,
  ScrollView,
  Modal,
  Button,
  TouchableHighlight,
  Alert,
} from "react-native";

export default function App() {
  const [modalVisibleplaya, setModalVisibleplaya] = React.useState(false);
  const [modalVisibleRoom, setModalVisibleRoom] = React.useState(false);
  const [modalVisibleRoom2, setModalVisibleRoom2] = React.useState(false);

  return (

    <ScrollView>
      <Modal
        transparent={true}
        visible={modalVisibleplaya}
        animationType="slide"
        onRequestClose={() => {
          alert("Modal has been closed.");
        }}
      >
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Premium</Text>
            <Text>
              Habitacion para 2 personas. Costo de $100 por dia.
            </Text>
            <Button
              title="Cerrar"
              onPress={() => {
                setModalVisibleplaya(!modalVisibleplaya);
              }}
            ></Button>
          </View>
        </View>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Vista al Mar</Text>
            <Text>
              Habitacion con vista al mar. Costo $85 por dia.
            </Text>
            <Button
              title="Cerrar"
              onPress={() => {
                setModalVisibleRoom(!modalVisibleRoom);
              }}
            ></Button>
          </View>
        </View>
        <View style={styles.vistaModal}>
          <View style={styles.Modal}>
            <Text style={styles.subtitulo}>Habitacion Doble</Text>
            <Text>
              Habitacion con dos camas. Costo $150 por dia.
            </Text>
            <Button
              title="Cerrar"
              onPress={() => {
                setModalVisibleRoom2(!modalVisibleRoom2);
              }}
            ></Button>
          </View>
        </View>
      </Modal>
      <View style={{ flexDirection: "row" }}>
        <Image style={styles.banner} source={require("./img/banner.jpg")} />
      </View>
      <View style={styles.contenedor}>
        <Text style={styles.titulo}>Habitaciones</Text>
        <ScrollView horizontal>
          <View>
            <TouchableHighlight
              onPress={() => {
                setModalVisibleplaya(!modalVisibleplaya);
              }}
            >
              <Image
                style={styles.ciudad}
                source={require("./img/habitacion1.jpg")}
              />
            </TouchableHighlight>
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/habitacion2.jpg")}
            />
          </View>
          <View>
            <Image
              style={styles.ciudad}
              source={require("./img/habitacion3.jpg")}
            />
          </View>
        </ScrollView>
        <Text style={styles.titulo}>Servicios</Text>
        
        <View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./img/mejores1.jpg")}
            />
            <Text style={styles.subtitulo}>Desayuno Incluido</Text>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./img/servicio1.jpg")}
            />
            <Text style={styles.subtitulo}>Room Service</Text>
          </View>
          <View>
            <Image
              style={styles.mejores}
              source={require("./img/servicio2.jpg")}
            />
            <Text style={styles.subtitulo}>Acceso a Area Recreativa</Text>
          </View>
          <Text style={styles.titulo}>Lugares Cercanos</Text>
          <View style={styles.listado}>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./img/ruta1.jpg")}
              />
              <Text style={styles.subtitulo}>Ruta de las Flores</Text>
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./img/ruta2.jpg")}
              />
              <Text style={styles.subtitulo}>Joya de Ceren</Text>
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./img/ruta3.jpg")}
              />
              <Text style={styles.subtitulo}>El Boqueron</Text>
            </View>
            <View style={styles.listaItem}>
              <Image
                style={styles.mejores}
                source={require("./img/ruta4.jpg")}
              />
              <Text style={styles.subtitulo}>SurfCity</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  banner: {
    height: 250,
    flex: 1,
  },
  titulo: {
    fontWeight: "bold",
    fontSize: 24,
    marginVertical: 10,
  },
  contenedor: {
    marginHorizontal: 10,
  },
  ciudad: {
    width: 250,
    height: 300,
    marginRight: 10,
  },
  mejores: {
    width: "100%",
    height: 200,
    marginVertical: 5,
  },
  listaItem: {
    flexBasis: "49%",
  },
  listado: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  vistaModal: {
    backgroundColor: "#000000aa",
    flex: 1,
  },
  Modal: {
    backgroundColor: "#fff",
    margin: 50,
    padding: 40,
    borderRadius: 10,
    flex: 1,
  },
  subtitulo: {
    fontWeight: "bold",
    fontSize: 14,
    justifyContent: "center",
  },
});
