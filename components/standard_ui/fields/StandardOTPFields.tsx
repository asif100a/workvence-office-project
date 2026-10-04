import { View, Text } from "react-native";
import React from "react";
import { Controller } from "react-hook-form";
import {
  FormControl,
  FormControlError,
  FormControlErrorText,
  FormControlLabel,
  FormControlLabelText,
} from "../../ui/form-control";
import { OtpInput } from "react-native-otp-entry";
import { Colors } from "@/constants/Colors";

export default function StandardOTPFields({
  control,
  otpLength = 6,
}: {
  control: any;
  otpLength?: number;
}) {
  return (
    <Controller
      control={control}
      name="otp"
      rules={{
        validate: (value) =>
          value.length === otpLength ||
          `Please enter the full ${otpLength}-digit code.`,
      }}
      render={({
        field: { onChange, onBlur, value },
        fieldState: { error },
      }) => {
        return (
          <FormControl isInvalid={Boolean(error)} className="mb-8">
            <FormControlLabel className="mb-4">
              <FormControlLabelText className="text-[#333] text-sm font-semibold">
                Enter OTP
              </FormControlLabelText>
            </FormControlLabel>

            <OtpInput
              numberOfDigits={otpLength}
              type="numeric"
              onFilled={onChange}
              onTextChange={onChange}
              onBlur={onBlur}
              autoFocus
              focusColor="transparent"
              textInputProps={{
                value,
              }}
              theme={{
                pinCodeTextStyle: { color: Colors.common.BRAND },
                pinCodeContainerStyle: {
                  borderColor: Colors.common.BRAND_LIGHT,
                  borderRadius: 50,
                  height: 46,
                },
                focusedPinCodeContainerStyle: {
                  borderColor: Colors.common.BRAND,
                  borderRadius: 50,
                },
              }}
            />

            {error?.message ? (
              <FormControlError>
                <FormControlErrorText className="text-xs text-[#d92d20]">
                  {error.message}
                </FormControlErrorText>
              </FormControlError>
            ) : null}
          </FormControl>
        );
      }}
    />
  );
}
