'use client';
import { Input, Button } from "../components/atoms";
import { InputField } from "../components/molecules";

export default function Test() {
    return (
        <div>
            <Input 
                placeholder="테스트 입력창"
            />
            <Button
                className="font-bold text-xl"
                content="테스트 버튼"
            />
            <Button
                className="font-medium text-xl"
                content="취소"
                skin="cancel"
            />
            <Button
                className="font-medium text-xl"
                content="확인"
            />
            <InputField 
                placeholder="테스트 입력창"
                title="제목"
                skin="outlined"
            />
            <InputField 
                placeholder="테스트 입력창"
                title="제목"
                skin="filled"
                errormsg="* 잘못된 비밀번호입니다."
                p="비밀번호 변경"
            />
        </div>
    );
}