import * as bcrypt from "bcrypt";

export class hashManager {
  public async hash(text: string): Promise<string> {
    const rounds = Number(process.env.BCRYPT_COST);
    const salt = await bcrypt.genSalt(rounds);
    return bcrypt.hash(text, salt);
  }

  //for login endpoint comparison of hashes
  public async compare(text: string, hash: string): Promise<boolean> {
    return bcrypt.compare(text, hash);
  }
}
