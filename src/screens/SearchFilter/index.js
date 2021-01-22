import React from 'react';
import {
  Dimensions,
  StyleSheet,
  ScrollView,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Slider from '@react-native-community/slider';
import DropDownPicker from 'react-native-dropdown-picker';

const windowWidth = Dimensions.get('window').width;

const SearchFilter = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.rowDirection}>
        <View style={styles.rowDirection}>
          <Image source={require('../../assets/icons/ic-pinmap.png')} />
          <TextInput style={styles.addressTitle}>6 Leigh Place, West Pennant Hills ...</TextInput>
        </View>

        <TouchableOpacity>
          <Text style={styles.btnChangeText}>Change</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.serviceTitle}>
        <Text style={styles.typeTitle}>Choose Service Type</Text>

        <View style={[styles.rowDirection, styles.spacingBetween]}>
          <View style={styles.typeGroup}>
            <View style={[styles.circleButton]}>
              <Image source={require('../../assets/icons/baby-boy.png')} style={styles.typeIcon} />
            </View>
            <Text>Child Care Center</Text>
          </View>

          <View style={styles.typeGroup}>
            <View style={[styles.circleButton, { borderColor: '#DB147F' }]}>
              <Image source={require('../../assets/icons/abc-block.png')} style={styles.typeIcon} />
            </View>
            <Text>Pre-school & Kindergarten</Text>
          </View>

          <View style={styles.typeGroup}>
            <View style={[styles.circleButton]}>
              <Image source={require('../../assets/icons/family.png')}  style={styles.typeIcon} />
            </View>
            <Text>Family Day Care</Text>
          </View>

          <View style={styles.typeGroup}>
            <View style={[styles.circleButton]}>
              <Image source={require('../../assets/icons/bag.png')} style={styles.typeIcon} />
            </View>
            <Text>Before & After School Care</Text>
          </View>
        </View>
      </View>

      <View>
        <View style={styles.rowDirection}>
          <Image source={require('../../assets/icons/heart.png')} tintColor="#DB147F" />
          <Text style={styles.ratingTitle}>KindiCare Rating</Text>
        </View>
        <View
          style={[styles.rowDirection, styles.spacingBetween, { marginTop: 13, marginBottom: 5 }]}
        >
          <Text>8.0</Text>
          <Text>10.0</Text>
        </View>
        <Slider
          style={{ width: windowWidth, height: 80 }}
          minimumValue={0}
          maximumValue={100}
          value={20}
          minimumTrackTintColor="#F2F2F2"
          maximumTrackTintColor="#DB147F"
          thumbTintColor="#FFFFFF"
        />
      </View>

      <View>
        <View style={styles.rowDirection}>
          <Image source={require('../../assets/icons/sort.png')} tintColor="#DB147F" />
          <Text style={styles.ratingTitle}>The shorted distance from home</Text>
        </View>
        <View
          style={[styles.rowDirection, styles.spacingBetween, { marginTop: 13, marginBottom: 5 }]}
        >
          <Text>0 km</Text>
          <Text>50 km</Text>
        </View>
        <Slider
          style={{ width: windowWidth, height: 80 }}
          minimumValue={0}
          maximumValue={100}
          value={10}
          minimumTrackTintColor="#F2F2F2"
          maximumTrackTintColor="#DB147F"
          thumbTintColor="#FFFFFF"
        />
      </View>

      <View>
        <View style={styles.rowDirection}>
          <Image source={require('../../assets/icons/money.png')} tintColor="#DB147F" />
          <Text style={styles.ratingTitle}>Value For Money For The Area</Text>
        </View>
        <View
          style={[styles.rowDirection, styles.spacingBetween, { marginTop: 13, marginBottom: 18 }]}
        >
          <TouchableOpacity style={styles.btnRate}>
            <Text>Good</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRate}>
            <Text>Very Good</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnRate}>
            <Text>Excellent</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ marginTop: 25 }}>
        <View style={[styles.rowDirection]}>
          <Image source={require('../../assets/icons/money-bag.png')} tintColor="#DB147F" />
          <Text style={styles.ratingTitle}>Cost Per Day</Text>
        </View>
        <View
          style={[styles.rowDirection, styles.spacingBetween, { marginTop: 13, marginBottom: 5 }]}
        >
          <Text>$55</Text>
          <Text>$127</Text>
        </View>
        <Slider
          style={{ width: windowWidth, height: 80 }}
          minimumValue={0}
          maximumValue={100}
          value={50}
          minimumTrackTintColor="#F2F2F2"
          maximumTrackTintColor="#DB147F"
          thumbTintColor="#FFFFFF"
        />
      </View>

      <View>
        <View style={styles.rowDirection}>
          <Image source={require('../../assets/icons/peace.png')} tintColor="#DB147F" />
          <Text style={styles.ratingTitle}>National Quality Standard Rating</Text>
        </View>
        <View>
          <DropDownPicker
            items={[
              { label: 'Exceeding or Excellent NQS', value: 'Exceeding or Excellent NQS' },
              { label: 'Meeting NQS', value: 'Meeting NQS' },
              { label: 'Working Towards NQS', value: 'Working Towards NQS' },
              {
                label: 'Significant Improvement Required',
                value: 'Significant Improvement Required',
              },
              {
                label: 'Not Rated or Provisional Rating',
                value: 'Not Rated or Provisional Rating',
              },
            ]}
            defaultValue="Exceeding or Excellent NQS"
            containerStyle={{ height: 40, marginTop: 18, marginBottom: 18 }}
            onChangeItem={(item) => console.log(item.label, item.value)}
            placeholderStyle={{ fontWeight: 'bold' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
          />
        </View>
      </View>

      <View>
        <View style={styles.rowDirection}>
          <Image source={require('../../assets/icons/sort.png')} tintColor="#DB147F" />
          <Text style={styles.ratingTitle}>Sort Results By</Text>
        </View>
        <View>
          <DropDownPicker
            items={[
              { label: 'Highest KindiCare Rating', value: 'Highest KindiCare Rating' },
              { label: 'Featured', value: 'Featured' },
              { label: 'Shortest Distance', value: 'Shortest Distance' },
              { label: 'Highest Cost Per Day', value: 'Highest Cost Per Day' },
              { label: 'Lowest Cost Per Day', value: 'Lowest Cost Per Day' },
              { label: 'Date Of Rating', value: 'Date Of Rating' },
            ]}
            defaultValue="Highest KindiCare Rating"
            containerStyle={{ height: 48, marginTop: 18 }}
            style={{ backgroundColor: '#fafafa', color: '#DB147F' }}
            itemStyle={{
              justifyContent: 'flex-start',
            }}
          />
        </View>
      </View>

      <View>
        <TouchableOpacity style={styles.btnFindChildcare}>
          <Text style={styles.btnFindChildcareText}>Find Childcare</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SearchFilter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: windowWidth,
    padding: 5,
  },
  rowDirection: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  spacingBetween: {
    justifyContent: 'space-between',
  },
  addressTitle: {
    fontWeight: 'bold',
    fontSize: 19,
  },
  btnChangeText: {
    color: '#DB147F',
    fontWeight: 'bold',
  },
  typeTitle: {
    color: '#DB147F',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 21,
  },
  typeGroup: {
    width: windowWidth / 4,
  },
  ratingTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  btnRate: {
    borderColor: '#DB147F',
    borderRadius: 4,
    borderWidth: 1,
    width: windowWidth / 4,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnFindChildcare: {
    borderColor: '#DB147F',
    borderRadius: 4,
    borderWidth: 1,
    width: windowWidth,
    height: 48,
    backgroundColor: '#DB147F',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 28,
    marginBottom: 34,
  },
  btnFindChildcareText: {
    color: 'white',
    fontWeight: 'bold',
  },
  borderInput: {
    borderColor: '#D3CCCC',
    borderRadius: 4,
    borderWidth: 1,
    width: windowWidth,
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
  },
  serviceTitle: {
    marginTop: 18,
    marginBottom: 53,
  },
  circleButton: {
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: '#D3CCCC',
    backgroundColor: 'white',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  typeIcon: {
    width: 52,
    height: 52,
  },
});
