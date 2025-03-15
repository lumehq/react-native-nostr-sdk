#include <jni.h>
#include "react-native-nostr-sdk.h"

extern "C"
JNIEXPORT jdouble JNICALL
Java_com_nostrsdk_NostrSdkModule_nativeMultiply(JNIEnv *env, jclass type, jdouble a, jdouble b) {
    return nostrsdk::multiply(a, b);
}
