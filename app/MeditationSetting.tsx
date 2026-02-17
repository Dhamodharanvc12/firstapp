import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { NavigationProp, useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../App';

export default function MeditationSetting() {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();
  const [time, setTime] = useState(new Date());
  const [show, setShow] = useState(false);
  const [selectedDays, setSelectedDays] = useState<string[]>([]);

  const daysOfWeek = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];

  const onChange = (event: DateTimePickerEvent, selectedTime?: Date) => {
    if (event.type === 'set' && selectedTime) {
      setTime(selectedTime);
    }
    setShow(false);
  };

  const toggleDay = (day: string) => {
    if (selectedDays.includes(day)) {
      setSelectedDays(selectedDays.filter(d => d !== day));
    } else {
      setSelectedDays([...selectedDays, day]);
    }
  };

  return (
    <View style={{ flex: 1, padding: 20, backgroundColor: '#fff' }}>
      <Text style={styles.boldText}>
        What time would you like to meditate?
      </Text>

      <Text style={styles.subText}>
        Any time you can choose, but we recommend first thing in the morning.
      </Text>

      <Button title="Choose Time" onPress={() => setShow(true)} />

      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Selected Time: {time.toLocaleTimeString()}
      </Text>

      <Text style={styles.boldText}>
        Which day would you like to meditate?
      </Text>
      <Text style={styles.subText}>
        Everyday is best, but we recommend picking at least five.
      </Text>

      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {daysOfWeek.map(day => (
          <TouchableOpacity
            key={day}
            onPress={() => toggleDay(day)}
            style={[
              styles.dayButton,
              selectedDays.includes(day) && styles.dayButtonSelected,
            ]}
          >
            <Text
              style={[
                styles.dayText,
                selectedDays.includes(day) && styles.dayTextSelected,
              ]}
            >
              {day.slice(0, 3)}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <Pressable
        style={styles.button}
        onPress={() => navigation.navigate('GetStarted')}
      >
        <Text style={styles.buttonText}>SAVE</Text>
      </Pressable>

      <Pressable
        onPress={() => navigation.navigate('GetStarted')}
        style={{ marginTop: 20 }}
      >
        <Text style={{ textAlign: 'center' }}>NO THANKS</Text>
      </Pressable>

      {show && (
        <DateTimePicker
          value={time}
          mode="time"
          is24Hour={false}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  dayButton: {
    width: 50,
    height: 50,
    padding: 0,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 25,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  dayButtonSelected: {
    backgroundColor: '#4caf50',
    borderColor: '#4caf50',
  },
  dayText: {
    color: '#000',
  },
  dayTextSelected: {
    color: '#fff',
    fontWeight: '600',
  },
  button: {
    backgroundColor: '#8E97FD',
    paddingBlock: 14,
    paddingInline: 20,
    borderRadius: 50,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    marginLeft: 10,
    fontSize: 16,
  },
  
  boldText: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 20,
  },
  text: {
    fontSize: 24,
    color: "#656464",
    marginBottom: 20,
  },
  subText: {
    fontSize: 18,
    color: "#999",
    marginBottom: 20,
  },
});
