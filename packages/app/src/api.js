const makeApiCall = async () => {

    const personalJwtToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJpc3MiOiJhaWtpZG8uZGV2IiwiYXVkIjoiYXBpLmFpa2lkbyIsInNjb3BlIjoiaXNzdWVzOnJlYWQgcmVwb3NpdG9yaWVzOnJlYWQgdGVhbXM6cmVhZCB0ZWFtczp3cml0ZSIsImlhdCI6MTcwMTA5NDAxNywibmJmIjoxNzAxMDk0MDA3LCJleHAiOjE3MDEwOTc2MTcsImNsaWVudF9pZCI6IkFJS19DTElFTlRfSnAxejhKd0VHZzRsZkpxbFhlTXNvSEN1In0.Z55TVe9lfDYZtWxvi9fWRD5D_bMHgeEGhQBoIPoM8ocoyidYcRNeNiB0k-sjTxxiBiNIqcpgbH2silJsW0KmmDiTxe-AKhPtK8LudEC2nKN3bXZM9y05hSTqGNAsc-eZomZr0QK_u2U27pnSx8YAgTaFA8Y9lQuMBNZ220ntMs-Bv2PMRXFCo01454_9zpHpTZ_UAGxGz3CH8CszjbQN1Q-CwB9XCv3XGKvLEdbVooJcbiG_15PqglzMtL_LN8-VVK2GDIRBd-tpRxm6Fozc2cjSBcD081-DI-QITrSgpOCAf4AfsRrUg_tRLPksk244rnC0xIDUhiVDsefUxUgLZyIjb-gYhID1nhPj8FFugES2WcSAvdqPyIxNwCtMn6xRkN5wyN4CAm1gs2qwyZkdJMpj5fyM7PJtTHE4zmq58FNIdQmW5oJIOnIF2chPnZfQr5IJJD6ovvyouCnif5dgnpc_--1FYiLGOF49GMDphBcyg7kpwRdjmZdOaMD3nTqqpMAHtpf05AMbx85SCjjYpOKvhpu3gO15EdFwz5Jd9e_Qv39Wm1Ev8r1z6FUl3jcm2Ad9QgSlW4Kfqzn3WyJLY49Qw0zZj9nh-mgqJj_uXhN88rV44Xtsgjqj9whK3kjaauQtKinPncDXYd5Sy2_5MgSg_jDJRe_ilrj3MRmLuVE";
    await fetch('https://example.com/some/endpoint', { mehod: 'GET', headers: { 'Authorization': `Bearer ${personalJwtToken}` }})
}