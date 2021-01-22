import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';

const windowWidth = Dimensions.get('window').width;

const Application = () => {
  return (
    <ScrollView style={styles.container}>
      <View>
        <View>
          <Text style={{ fontWeight: 'bold' }}>Children Information</Text>
          <Text style={{ color: '#857E7F' }}>
            You can choose which children want to apply by clicking on their name and editing the
            information by clicking on the pen icon
          </Text>
        </View>

        <View style={styles.boderInfoChild}>
          <View style={[styles.rowDirection, styles.spacingBetween]}>
            <View style={styles.rowDirection}>
              <Text style={{ marginRight: 8.5 }}>Wesley Perry</Text>
              <Image source={require('../../assets/icons/male.png')} />
            </View>
            <View style={[styles.circleButtonEdit]}>
              <Image source={require('../../assets/icons/pen.png')} tintColor="#DB147F" />
            </View>
          </View>
          <Text style={{ color: '#857E7F' }}>04-04-2018</Text>
          <View
            style={[styles.rowDirection, styles.spacingBetween, { marginTop: 13, marginBottom: 5 }]}
          >
            <Text style={{ color: '#857E7F' }}>Allergies: No</Text>
            <Text style={{ color: '#857E7F' }}>Special need: No</Text>
          </View>
          <Text style={{ color: '#857E7F', marginBottom: 6 }}>Day care require:</Text>
          <View style={[styles.rowDirection]}>
            <TouchableOpacity style={[styles.circleButton]}>
              <Text style={styles.day}>Mon</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.day}>Tue</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.day}>Wed</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.day}>Thus</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.day}>Fri</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.day}>Sat</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.circleButton}>
              <Text style={styles.day}>Sun</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Text style={{ color: '#857E7F', marginBottom: 6, marginTop: 8 }}>Service:</Text>
            <TouchableOpacity style={[styles.btnServiceSelectOption]}>
              <View style={[styles.rowDirection, styles.spacingBetween]}>
                <Text style={styles.btnServiceSelectOptionText}>Family Day Care</Text>
                <Text style={{ color: 'white' }}>110$</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnServiceOption}>
              <View style={[styles.rowDirection, styles.spacingBetween]}>
                <Text style={styles.btnServiceOptionText}>Child Care Centre</Text>
                <Text style={{ color: 'black' }}>140$</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnServiceOption}>
              <View style={[styles.rowDirection, styles.spacingBetween]}>
                <Text style={styles.btnServiceOptionText}>Pre-school & Kindergarten</Text>
                <Text style={{ color: 'black' }}>270$</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btnServiceOption}>
              <View style={[styles.rowDirection, styles.spacingBetween]}>
                <Text style={styles.btnServiceOptionText}>Before and After School Care</Text>
                <Text style={{ color: 'black' }}>299$</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.boderInfoSecondChild}>
          <View style={[styles.rowDirection, styles.spacingBetween]}>
            <View style={styles.rowDirection}>
              <Text style={{ marginRight: 8.5 }}>Kathryn Murphy</Text>
              <Image source={require('../../assets/icons/female.png')} tintColor="#DB147F" />
            </View>
            <View style={[styles.circleButtonEdit]}>
              <Image source={require('../../assets/icons/pen.png')} tintColor="#DB147F" />
            </View>
          </View>
          <Text style={{ color: '#857E7F' }}>04-04-2018</Text>
          <View
            style={[styles.rowDirection, styles.spacingBetween, { marginTop: 13, marginBottom: 5 }]}
          >
            <Text style={{ color: '#857E7F' }}>Allergies: No</Text>
            <Text style={{ color: '#857E7F' }}>Special need: No</Text>
          </View>
        </View>

        <TouchableOpacity style={{ marginTop: 24 }}>
          <Text style={styles.btnAddNewChild}>+ Add New Child</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnFindChildcare}>
          <Text style={styles.btnFindChildcareText}>Done</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Application;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    padding: 16,
  },
  boderInfoChild: {
    height: 380,
    borderColor: '#DB147F',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 24,
    padding: 15,
  },
  boderInfoSecondChild: {
    height: 122,
    borderColor: '#DB147F',
    borderRadius: 4,
    borderWidth: 1,
    marginTop: 24,
    padding: 15,
  },
  rowDirection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacingBetween: {
    justifyContent: 'space-between',
  },
  btnFindChildcare: {
    borderColor: '#DB147F',
    borderRadius: 4,
    borderWidth: 1,
    width: windowWidth,
    height: 48,
    backgroundColor: '#DB147F',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 39,
    marginBottom: 83,
  },
  btnFindChildcareText: {
    color: 'white',
    fontWeight: 'bold',
  },
  btnServiceOption: {
    borderColor: '#F2F2F2',
    borderRadius: 4,
    borderWidth: 1,
    height: 32,
    backgroundColor: '#F2F2F2',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnServiceOptionText: {
    color: '#5C595A',
  },
  btnServiceSelectOption: {
    borderColor: '#DB147F',
    borderRadius: 4,
    borderWidth: 1,
    height: 32,
    backgroundColor: '#DB147F',
    justifyContent: 'center',
    marginBottom: 10,
  },
  btnServiceSelectOptionText: {
    color: 'white',
  },
  btnAddNewChild: {
    color: '#DB147F',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  circleButton: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderColor: '#DB147F',
    backgroundColor: '#DB147F',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginRight: 13,
  },
  circleButtonEdit: {
    height: 40,
    width: 40,
    borderRadius: 30,
    borderColor: '#DB147F',
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  day: {
    color: 'white',
  },
});
