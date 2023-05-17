export default class MeteoException extends Error {
  message: string;

  constructor(message: string) {
    super();
    this.message = message;
  }
}
