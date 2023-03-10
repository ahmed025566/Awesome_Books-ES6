import { DateTime } from './luxon.js';

export default class displayDate {
  static display() {
    const now = DateTime.now().c;
    const date = `${now.year}-${now.month}-${now.day}`;
    const time = `${now.hour}:${now.minute}:${now.second}`;
    const dateTime = `${date} ${time}`;
    document.getElementById('displayDateTime').innerHTML = dateTime;
  }
}
