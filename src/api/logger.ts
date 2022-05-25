class Logger {
  constructor() {}
  log(message: string): void {
    this.info(message);
  }
  info(message: string): void {
    console.log(`[INFO] ${message}`);
  }
  warn(message: string): void {
    console.warn(`[WARN] ${message}`);
  }
}
export default new Logger();
