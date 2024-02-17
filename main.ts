import { string } from "https://deno.land/x/cliffy@v1.0.0-rc.3/flags/types/string.ts";
import {
  Checkbox,
  Confirm,
  Input,
  Number,
  prompt,
  Secret,
  Select,
} from "https://deno.land/x/cliffy@v1.0.0-rc.3/prompt/mod.ts";

const res = await prompt([{
  name: "account",
  message: "アカウント名を入力",
  type: Input,
}, {
  name: "password",
  message: "パスワードを入力",
  type: Secret,
}, {
  name: "toServer",
  message: "接続したいサーバーを選択",
  options: [
    "FTPサーバー1",
    "FTPサーバー2",
    Select.separator("--------"),
    "SFTPサーバー1",
    "SFTPサーバー2",
    Select.separator("--------"),
    "S3サーバー1",
    "S3Pサーバー2",
  ],
  type: Select,
}]);
console.log(
  "アカウント名:" + res.account + "\n",
  "接続先サーバー:" + res.toServer,
);
