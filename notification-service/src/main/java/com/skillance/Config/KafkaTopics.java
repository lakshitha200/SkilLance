package com.skillance.Config;

public final class KafkaTopics {
    private KafkaTopics() {}
    public static final String ORDER_EVENTS = "order-events.v1";
    public static final String PAYMENT_EVENTS = "payment-events.v1";
    public static final String ORDER_EVENTS_DLT = "order-events.v1.DLT";
    public static final String PAYMENT_EVENTS_DLT = "payment-events.v1.DLT";
}

