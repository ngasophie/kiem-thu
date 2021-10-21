export default function calculateReward(type, p) {
    let rewardValue = 0;
    if(0.5 <= p && p < 0.85) {
        rewardValue = 1500000*p
    }
    else if(0.85 <= p && p <=1) {
        rewardValue = 2000000*p
    }
    else if(1 < p && p<= 1.5) {
        rewardValue = 2500000*(p - 1) + 2000000
    }
    else if(p < 0 || p > 1.5){
        return 'Không hợp lệ'
    }
    else {
        rewardValue = 0
    }
    switch(type) {
        case 'Nhân viên':
            rewardValue = rewardValue*1
            break
        case 'Thực tập':
            rewardValue = rewardValue * 0.85
            break
        case 'Quản lí':
            rewardValue = rewardValue*2
            break
        default:
            return 'Không hợp lệ'
    }
    return rewardValue
}