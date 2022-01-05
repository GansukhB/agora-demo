import { createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "b66c79fb967248d486d2a331ef6e9d6a";
const token =
  "006b66c79fb967248d486d2a331ef6e9d6aIAB2KM/WLjjVTz0Ug7D/J5qf6BwcH/DIAothuitQ3Zk+WmTNKL8AAAAAEACIFpSNGVPWYQEAAQAYU9Zh";

export const config = { mode: "rtc", codec: "vp8", appId: appId, token: token };
export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";
