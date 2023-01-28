export interface LoadingState  { 
    entities: []
    loading: 'loading' |'idle' | 'pending' | 'succeeded' | 'failed',
    error?: string;
}
    
export const loadingInitialState: LoadingState = {
    entities: [],
    loading: 'idle',
    error: ''
} 